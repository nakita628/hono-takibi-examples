import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AcmeChallengeSetsRootDomain(
  args: InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.acmeChallengeSets[':rootDomain'].$get(args, options))
}

export async function postV1AcmeChallengeSetsRootDomainRotateChallenges(
  args: InferRequestType<
    (typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.acmeChallengeSets[':rootDomain:rotateChallenges'].$post(args, options),
  )
}
