import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCapabilitiesV1FeatureFlagsServiceGetFeatureFlags(
  args: InferRequestType<
    (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['capabilities.v1.FeatureFlagsService'].GetFeatureFlags.$post(args, options),
  )
}
