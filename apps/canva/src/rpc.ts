import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1DesignsDesignIdAnalytics(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].analytics.$get(args, options))
}

export async function getV1DesignsDesignIdAnalyticsViewers(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].analytics.viewers.$get(args, options))
}

export async function getV1DesignsDesignIdAnalyticsViewsOverTime(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].analytics['views-over-time'].$get(args, options),
  )
}

export async function postV1DesignsDesignIdAnalyticsPageViews(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].analytics['page-views'].$post(args, options),
  )
}

export async function getV1DesignsDesignIdAnalyticsLinks(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].analytics.links.$get(args, options))
}

export async function getV1AppsAppIdJwks(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':appId'].jwks.$get(args, options))
}

export async function getV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':assetId'].$get(args, options))
}

export async function deleteV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':assetId'].$delete(args, options))
}

export async function patchV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':assetId'].$patch(args, options))
}

export async function postV1AssetUploads(
  args: InferRequestType<(typeof client.v1)['asset-uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['asset-uploads'].$post(args, options))
}

export async function getV1AssetUploadsJobId(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['asset-uploads'][':jobId'].$get(args, options))
}

export async function postV1UrlAssetUploads(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['url-asset-uploads'].$post(args, options))
}

export async function getV1UrlAssetUploadsJobId(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['url-asset-uploads'][':jobId'].$get(args, options))
}

export async function postV1Autofills(
  args: InferRequestType<typeof client.v1.autofills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.autofills.$post(args, options))
}

export async function getV1AutofillsJobId(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.autofills[':jobId'].$get(args, options))
}

export async function getV1BrandTemplates(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['brand-templates'].$get(args, options))
}

export async function postV1BrandTemplates(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['brand-templates'].$post(args, options))
}

export async function getV1BrandTemplatesBrandTemplateId(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['brand-templates'][':brandTemplateId'].$get(args, options))
}

export async function getV1BrandTemplatesBrandTemplateIdDataset(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['brand-templates'][':brandTemplateId'].dataset.$get(args, options),
  )
}

export async function postV1Comments(
  args: InferRequestType<typeof client.v1.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.comments.$post(args, options))
}

export async function getV1DesignsDesignIdCommentsThreadIdReplies(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].comments[':threadId'].replies.$get(args, options),
  )
}

export async function postV1DesignsDesignIdCommentsThreadIdReplies(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].comments[':threadId'].replies.$post(args, options),
  )
}

export async function getV1DesignsDesignIdCommentsThreadId(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].comments[':threadId'].$get(args, options),
  )
}

export async function getV1DesignsDesignIdCommentsThreadIdRepliesReplyId(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(args, options),
  )
}

export async function postV1DesignsDesignIdComments(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].comments.$post(args, options))
}

export async function getV1ConnectKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.connect.keys.$get(undefined, options))
}

export async function getV1Designs(
  args: InferRequestType<typeof client.v1.designs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs.$get(args, options))
}

export async function postV1Designs(
  args: InferRequestType<typeof client.v1.designs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs.$post(args, options))
}

export async function getV1DesignsDesignId(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].$get(args, options))
}

export async function getV1DesignsDesignIdPages(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].pages.$get(args, options))
}

export async function getV1DesignsDesignIdExportFormats(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId']['export-formats'].$get(args, options))
}

export async function getV1DesignsDesignIdDataset(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.designs[':designId'].dataset.$get(args, options))
}

export async function postV1PrintPartnerDesigns(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['print-partner'].designs.$post(args, options))
}

export async function getV1PrintPartnerDesignsDesignId(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['print-partner'].designs[':designId'].$get(args, options))
}

export async function postV1Generations(
  args: InferRequestType<typeof client.v1.generations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.generations.$post(args, options))
}

export async function getV1GenerationsJobId(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.generations[':jobId'].$get(args, options))
}

export async function postV1Imports(
  args: InferRequestType<typeof client.v1.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.imports.$post(args, options))
}

export async function getV1ImportsJobId(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.imports[':jobId'].$get(args, options))
}

export async function postV1UrlImports(
  args: InferRequestType<(typeof client.v1)['url-imports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['url-imports'].$post(args, options))
}

export async function getV1UrlImportsJobId(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['url-imports'][':jobId'].$get(args, options))
}

export async function postV1ImageToDesignImports(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-to-design-imports'].$post(args, options))
}

export async function getV1ImageToDesignImportsJobId(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-to-design-imports'][':jobId'].$get(args, options))
}

export async function postV1Exports(
  args: InferRequestType<typeof client.v1.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.exports.$post(args, options))
}

export async function postV1PrintPartnerExports(
  args: InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['print-partner'].exports.$post(args, options))
}

export async function getV1ExportsExportId(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.exports[':exportId'].$get(args, options))
}

export async function getV1FoldersFolderId(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':folderId'].$get(args, options))
}

export async function deleteV1FoldersFolderId(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':folderId'].$delete(args, options))
}

export async function patchV1FoldersFolderId(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':folderId'].$patch(args, options))
}

export async function getV1FoldersFolderIdItems(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':folderId'].items.$get(args, options))
}

export async function postV1FoldersMove(
  args: InferRequestType<typeof client.v1.folders.move.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders.move.$post(args, options))
}

export async function postV1Folders(
  args: InferRequestType<typeof client.v1.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders.$post(args, options))
}

export async function postV1ImageGenerations(
  args: InferRequestType<(typeof client.v1)['image-generations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-generations'].$post(args, options))
}

export async function getV1ImageGenerationsJobId(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-generations'][':jobId'].$get(args, options))
}

export async function postV1ImageTransformations(
  args: InferRequestType<(typeof client.v1)['image-transformations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-transformations'].$post(args, options))
}

export async function getV1ImageTransformationsJobId(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['image-transformations'][':jobId'].$get(args, options))
}

export async function postV1Merges(
  args: InferRequestType<typeof client.v1.merges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.merges.$post(args, options))
}

export async function getV1MergesJobId(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.merges[':jobId'].$get(args, options))
}

export async function postV1OauthToken(
  args: InferRequestType<typeof client.v1.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.token.$post(args, options))
}

export async function postV1OauthIntrospect(
  args: InferRequestType<typeof client.v1.oauth.introspect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.introspect.$post(args, options))
}

export async function postV1OauthRevoke(
  args: InferRequestType<typeof client.v1.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.revoke.$post(args, options))
}

export async function getV1OidcJwks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.oidc.jwks.$get(undefined, options))
}

export async function getV1OidcUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.oidc.userinfo.$get(undefined, options))
}

export async function postV1Resizes(
  args: InferRequestType<typeof client.v1.resizes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.resizes.$post(args, options))
}

export async function getV1ResizesJobId(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.resizes[':jobId'].$get(args, options))
}

export async function getV1UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.me.$get(undefined, options))
}

export async function getV1UsersMeCapabilities(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.me.capabilities.$get(undefined, options))
}

export async function getV1UsersMeProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.me.profile.$get(undefined, options))
}
