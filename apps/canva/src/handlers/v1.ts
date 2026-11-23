import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AssetsAssetIdRoute,
  deleteV1FoldersFolderIdRoute,
  getV1AppsAppIdJwksRoute,
  getV1AssetsAssetIdRoute,
  getV1AssetUploadsJobIdRoute,
  getV1AutofillsJobIdRoute,
  getV1BrandTemplatesBrandTemplateIdDatasetRoute,
  getV1BrandTemplatesBrandTemplateIdRoute,
  getV1BrandTemplatesRoute,
  getV1ConnectKeysRoute,
  getV1DesignsDesignIdAnalyticsLinksRoute,
  getV1DesignsDesignIdAnalyticsRoute,
  getV1DesignsDesignIdAnalyticsViewersRoute,
  getV1DesignsDesignIdAnalyticsViewsOverTimeRoute,
  getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute,
  getV1DesignsDesignIdCommentsThreadIdRepliesRoute,
  getV1DesignsDesignIdCommentsThreadIdRoute,
  getV1DesignsDesignIdDatasetRoute,
  getV1DesignsDesignIdExportFormatsRoute,
  getV1DesignsDesignIdPagesRoute,
  getV1DesignsDesignIdRoute,
  getV1DesignsRoute,
  getV1ExportsExportIdRoute,
  getV1FoldersFolderIdItemsRoute,
  getV1FoldersFolderIdRoute,
  getV1GenerationsJobIdRoute,
  getV1ImageGenerationsJobIdRoute,
  getV1ImageToDesignImportsJobIdRoute,
  getV1ImageTransformationsJobIdRoute,
  getV1ImportsJobIdRoute,
  getV1MergesJobIdRoute,
  getV1OidcJwksRoute,
  getV1OidcUserinfoRoute,
  getV1PrintPartnerDesignsDesignIdRoute,
  getV1ResizesJobIdRoute,
  getV1UrlAssetUploadsJobIdRoute,
  getV1UrlImportsJobIdRoute,
  getV1UsersMeCapabilitiesRoute,
  getV1UsersMeProfileRoute,
  getV1UsersMeRoute,
  patchV1AssetsAssetIdRoute,
  patchV1FoldersFolderIdRoute,
  postV1AssetUploadsRoute,
  postV1AutofillsRoute,
  postV1BrandTemplatesRoute,
  postV1CommentsRoute,
  postV1DesignsDesignIdAnalyticsPageViewsRoute,
  postV1DesignsDesignIdCommentsRoute,
  postV1DesignsDesignIdCommentsThreadIdRepliesRoute,
  postV1DesignsRoute,
  postV1ExportsRoute,
  postV1FoldersMoveRoute,
  postV1FoldersRoute,
  postV1GenerationsRoute,
  postV1ImageGenerationsRoute,
  postV1ImageToDesignImportsRoute,
  postV1ImageTransformationsRoute,
  postV1ImportsRoute,
  postV1MergesRoute,
  postV1OauthIntrospectRoute,
  postV1OauthRevokeRoute,
  postV1OauthTokenRoute,
  postV1PrintPartnerDesignsRoute,
  postV1PrintPartnerExportsRoute,
  postV1ResizesRoute,
  postV1UrlAssetUploadsRoute,
  postV1UrlImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1DesignsDesignIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsViewsOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdAnalyticsPageViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsAppIdJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssetUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetUploadsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UrlAssetUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UrlAssetUploadsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AutofillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutofillsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BrandTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandTemplatesBrandTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandTemplatesBrandTemplateIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdCommentsThreadIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdExportFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrintPartnerDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrintPartnerDesignsDesignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GenerationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UrlImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UrlImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImageToDesignImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageToDesignImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrintPartnerExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FoldersFolderIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FoldersMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImageGenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageGenerationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImageTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageTransformationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MergesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OidcJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OidcUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResizesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersMeCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersMeProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
