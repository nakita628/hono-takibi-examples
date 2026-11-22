import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getJsonEmailYOURAPIKEYHEREUSEREMAILHERE(
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(args, options),
  )
}

export async function getJsonPhoneYOURAPIKEYHEREUSERPHONEHERE(
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(args, options),
  )
}

export async function getJsonUrlYOURAPIKEYHEREURLHERE(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(args, options))
}
