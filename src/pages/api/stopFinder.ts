// TODO: Add CORS!!!!!
import { STOP_FINDER } from './constants';
import { fetchData } from './utils';
import stopRequestFixture from '../../fixtures/stopFinder.json'

export async function GET({ request }: { request: any }) {
  const searchParams = new URL(request.url).searchParams
  const str = (searchParams.get('searchString'))

  if (!str) {
    return new Response(
      JSON.stringify({
        error: 'No search string'
      }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    }
    );
  }
  let data

  // saving calls to APIs
  if (str.toLowerCase() !== 'lisburn') {
    const params = new URLSearchParams({
      type_sf: 'any',
      name_sf: str,
      ext_macro: 'sf'
    })
    const translinkData = await fetchData(STOP_FINDER, params)
    data = await translinkData.json()
  }

  else {
    data = stopRequestFixture
  }

  return new Response(
    JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  }
  );
}