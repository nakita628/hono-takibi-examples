import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFeatureFlags202609AppIdFlagsAll(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags.all.$get(args, options),
  )
}

export async function getFeatureFlags202609AppIdFlagsFlagName(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(args, options),
  )
}

export async function putFeatureFlags202609AppIdFlagsFlagName(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$put(args, options),
  )
}

export async function deleteFeatureFlags202609AppIdFlagsFlagName(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$delete(args, options),
  )
}

export async function getFeatureFlags202609AppIdFlagsFlagNamePortals(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(args, options),
  )
}

export async function postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDelete(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.batch.delete.$post(
      args,
      options,
    ),
  )
}

export async function postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsert(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.batch.upsert.$post(
      args,
      options,
    ),
  )
}

export async function getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
      args,
      options,
    ),
  )
}

export async function putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$delete(
      args,
      options,
    ),
  )
}
