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
} from './routes'
import {
  deleteV1AssetsAssetIdRouteHandler,
  deleteV1FoldersFolderIdRouteHandler,
  getV1AppsAppIdJwksRouteHandler,
  getV1AssetsAssetIdRouteHandler,
  getV1AssetUploadsJobIdRouteHandler,
  getV1AutofillsJobIdRouteHandler,
  getV1BrandTemplatesBrandTemplateIdDatasetRouteHandler,
  getV1BrandTemplatesBrandTemplateIdRouteHandler,
  getV1BrandTemplatesRouteHandler,
  getV1ConnectKeysRouteHandler,
  getV1DesignsDesignIdAnalyticsLinksRouteHandler,
  getV1DesignsDesignIdAnalyticsRouteHandler,
  getV1DesignsDesignIdAnalyticsViewersRouteHandler,
  getV1DesignsDesignIdAnalyticsViewsOverTimeRouteHandler,
  getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRouteHandler,
  getV1DesignsDesignIdCommentsThreadIdRepliesRouteHandler,
  getV1DesignsDesignIdCommentsThreadIdRouteHandler,
  getV1DesignsDesignIdDatasetRouteHandler,
  getV1DesignsDesignIdExportFormatsRouteHandler,
  getV1DesignsDesignIdPagesRouteHandler,
  getV1DesignsDesignIdRouteHandler,
  getV1DesignsRouteHandler,
  getV1ExportsExportIdRouteHandler,
  getV1FoldersFolderIdItemsRouteHandler,
  getV1FoldersFolderIdRouteHandler,
  getV1GenerationsJobIdRouteHandler,
  getV1ImageGenerationsJobIdRouteHandler,
  getV1ImageToDesignImportsJobIdRouteHandler,
  getV1ImageTransformationsJobIdRouteHandler,
  getV1ImportsJobIdRouteHandler,
  getV1MergesJobIdRouteHandler,
  getV1OidcJwksRouteHandler,
  getV1OidcUserinfoRouteHandler,
  getV1PrintPartnerDesignsDesignIdRouteHandler,
  getV1ResizesJobIdRouteHandler,
  getV1UrlAssetUploadsJobIdRouteHandler,
  getV1UrlImportsJobIdRouteHandler,
  getV1UsersMeCapabilitiesRouteHandler,
  getV1UsersMeProfileRouteHandler,
  getV1UsersMeRouteHandler,
  patchV1AssetsAssetIdRouteHandler,
  patchV1FoldersFolderIdRouteHandler,
  postV1AssetUploadsRouteHandler,
  postV1AutofillsRouteHandler,
  postV1BrandTemplatesRouteHandler,
  postV1CommentsRouteHandler,
  postV1DesignsDesignIdAnalyticsPageViewsRouteHandler,
  postV1DesignsDesignIdCommentsRouteHandler,
  postV1DesignsDesignIdCommentsThreadIdRepliesRouteHandler,
  postV1DesignsRouteHandler,
  postV1ExportsRouteHandler,
  postV1FoldersMoveRouteHandler,
  postV1FoldersRouteHandler,
  postV1GenerationsRouteHandler,
  postV1ImageGenerationsRouteHandler,
  postV1ImageToDesignImportsRouteHandler,
  postV1ImageTransformationsRouteHandler,
  postV1ImportsRouteHandler,
  postV1MergesRouteHandler,
  postV1OauthIntrospectRouteHandler,
  postV1OauthRevokeRouteHandler,
  postV1OauthTokenRouteHandler,
  postV1PrintPartnerDesignsRouteHandler,
  postV1PrintPartnerExportsRouteHandler,
  postV1ResizesRouteHandler,
  postV1UrlAssetUploadsRouteHandler,
  postV1UrlImportsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1DesignsDesignIdAnalyticsRoute, getV1DesignsDesignIdAnalyticsRouteHandler)
  .openapi(
    getV1DesignsDesignIdAnalyticsViewersRoute,
    getV1DesignsDesignIdAnalyticsViewersRouteHandler,
  )
  .openapi(
    getV1DesignsDesignIdAnalyticsViewsOverTimeRoute,
    getV1DesignsDesignIdAnalyticsViewsOverTimeRouteHandler,
  )
  .openapi(
    postV1DesignsDesignIdAnalyticsPageViewsRoute,
    postV1DesignsDesignIdAnalyticsPageViewsRouteHandler,
  )
  .openapi(getV1DesignsDesignIdAnalyticsLinksRoute, getV1DesignsDesignIdAnalyticsLinksRouteHandler)
  .openapi(getV1AppsAppIdJwksRoute, getV1AppsAppIdJwksRouteHandler)
  .openapi(deleteV1AssetsAssetIdRoute, deleteV1AssetsAssetIdRouteHandler)
  .openapi(getV1AssetsAssetIdRoute, getV1AssetsAssetIdRouteHandler)
  .openapi(patchV1AssetsAssetIdRoute, patchV1AssetsAssetIdRouteHandler)
  .openapi(postV1AssetUploadsRoute, postV1AssetUploadsRouteHandler)
  .openapi(getV1AssetUploadsJobIdRoute, getV1AssetUploadsJobIdRouteHandler)
  .openapi(postV1UrlAssetUploadsRoute, postV1UrlAssetUploadsRouteHandler)
  .openapi(getV1UrlAssetUploadsJobIdRoute, getV1UrlAssetUploadsJobIdRouteHandler)
  .openapi(postV1AutofillsRoute, postV1AutofillsRouteHandler)
  .openapi(getV1AutofillsJobIdRoute, getV1AutofillsJobIdRouteHandler)
  .openapi(getV1BrandTemplatesRoute, getV1BrandTemplatesRouteHandler)
  .openapi(postV1BrandTemplatesRoute, postV1BrandTemplatesRouteHandler)
  .openapi(getV1BrandTemplatesBrandTemplateIdRoute, getV1BrandTemplatesBrandTemplateIdRouteHandler)
  .openapi(
    getV1BrandTemplatesBrandTemplateIdDatasetRoute,
    getV1BrandTemplatesBrandTemplateIdDatasetRouteHandler,
  )
  .openapi(postV1CommentsRoute, postV1CommentsRouteHandler)
  .openapi(
    getV1DesignsDesignIdCommentsThreadIdRepliesRoute,
    getV1DesignsDesignIdCommentsThreadIdRepliesRouteHandler,
  )
  .openapi(
    postV1DesignsDesignIdCommentsThreadIdRepliesRoute,
    postV1DesignsDesignIdCommentsThreadIdRepliesRouteHandler,
  )
  .openapi(
    getV1DesignsDesignIdCommentsThreadIdRoute,
    getV1DesignsDesignIdCommentsThreadIdRouteHandler,
  )
  .openapi(
    getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute,
    getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRouteHandler,
  )
  .openapi(postV1DesignsDesignIdCommentsRoute, postV1DesignsDesignIdCommentsRouteHandler)
  .openapi(getV1ConnectKeysRoute, getV1ConnectKeysRouteHandler)
  .openapi(getV1DesignsRoute, getV1DesignsRouteHandler)
  .openapi(postV1DesignsRoute, postV1DesignsRouteHandler)
  .openapi(getV1DesignsDesignIdRoute, getV1DesignsDesignIdRouteHandler)
  .openapi(getV1DesignsDesignIdPagesRoute, getV1DesignsDesignIdPagesRouteHandler)
  .openapi(getV1DesignsDesignIdExportFormatsRoute, getV1DesignsDesignIdExportFormatsRouteHandler)
  .openapi(getV1DesignsDesignIdDatasetRoute, getV1DesignsDesignIdDatasetRouteHandler)
  .openapi(postV1PrintPartnerDesignsRoute, postV1PrintPartnerDesignsRouteHandler)
  .openapi(getV1PrintPartnerDesignsDesignIdRoute, getV1PrintPartnerDesignsDesignIdRouteHandler)
  .openapi(postV1GenerationsRoute, postV1GenerationsRouteHandler)
  .openapi(getV1GenerationsJobIdRoute, getV1GenerationsJobIdRouteHandler)
  .openapi(postV1ImportsRoute, postV1ImportsRouteHandler)
  .openapi(getV1ImportsJobIdRoute, getV1ImportsJobIdRouteHandler)
  .openapi(postV1UrlImportsRoute, postV1UrlImportsRouteHandler)
  .openapi(getV1UrlImportsJobIdRoute, getV1UrlImportsJobIdRouteHandler)
  .openapi(postV1ImageToDesignImportsRoute, postV1ImageToDesignImportsRouteHandler)
  .openapi(getV1ImageToDesignImportsJobIdRoute, getV1ImageToDesignImportsJobIdRouteHandler)
  .openapi(postV1ExportsRoute, postV1ExportsRouteHandler)
  .openapi(postV1PrintPartnerExportsRoute, postV1PrintPartnerExportsRouteHandler)
  .openapi(getV1ExportsExportIdRoute, getV1ExportsExportIdRouteHandler)
  .openapi(deleteV1FoldersFolderIdRoute, deleteV1FoldersFolderIdRouteHandler)
  .openapi(getV1FoldersFolderIdRoute, getV1FoldersFolderIdRouteHandler)
  .openapi(patchV1FoldersFolderIdRoute, patchV1FoldersFolderIdRouteHandler)
  .openapi(getV1FoldersFolderIdItemsRoute, getV1FoldersFolderIdItemsRouteHandler)
  .openapi(postV1FoldersMoveRoute, postV1FoldersMoveRouteHandler)
  .openapi(postV1FoldersRoute, postV1FoldersRouteHandler)
  .openapi(postV1ImageGenerationsRoute, postV1ImageGenerationsRouteHandler)
  .openapi(getV1ImageGenerationsJobIdRoute, getV1ImageGenerationsJobIdRouteHandler)
  .openapi(postV1ImageTransformationsRoute, postV1ImageTransformationsRouteHandler)
  .openapi(getV1ImageTransformationsJobIdRoute, getV1ImageTransformationsJobIdRouteHandler)
  .openapi(postV1MergesRoute, postV1MergesRouteHandler)
  .openapi(getV1MergesJobIdRoute, getV1MergesJobIdRouteHandler)
  .openapi(postV1OauthTokenRoute, postV1OauthTokenRouteHandler)
  .openapi(postV1OauthIntrospectRoute, postV1OauthIntrospectRouteHandler)
  .openapi(postV1OauthRevokeRoute, postV1OauthRevokeRouteHandler)
  .openapi(getV1OidcJwksRoute, getV1OidcJwksRouteHandler)
  .openapi(getV1OidcUserinfoRoute, getV1OidcUserinfoRouteHandler)
  .openapi(postV1ResizesRoute, postV1ResizesRouteHandler)
  .openapi(getV1ResizesJobIdRoute, getV1ResizesJobIdRouteHandler)
  .openapi(getV1UsersMeRoute, getV1UsersMeRouteHandler)
  .openapi(getV1UsersMeCapabilitiesRoute, getV1UsersMeCapabilitiesRouteHandler)
  .openapi(getV1UsersMeProfileRoute, getV1UsersMeProfileRouteHandler)

export default app
