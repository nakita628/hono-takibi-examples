import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  deleteV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  deleteV1DataSetsDataSetIdRoute,
  deleteV1EventActionsEventActionIdRoute,
  deleteV1JobsJobIdRoute,
  getTagsResourceArnRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  getV1DataSetsDataSetIdRevisionsRoute,
  getV1DataSetsDataSetIdRoute,
  getV1DataSetsRoute,
  getV1EventActionsEventActionIdRoute,
  getV1EventActionsRoute,
  getV1JobsJobIdRoute,
  getV1JobsRoute,
  patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  patchV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  patchV1DataSetsDataSetIdRoute,
  patchV1EventActionsEventActionIdRoute,
  patchV1JobsJobIdRoute,
  postTagsResourceArnRoute,
  postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRoute,
  postV1DataSetsDataSetIdRevisionsRoute,
  postV1DataSetsRoute,
  postV1EventActionsRoute,
  postV1JobsRoute,
  postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  deleteV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  deleteV1DataSetsDataSetIdRouteHandler,
  deleteV1EventActionsEventActionIdRouteHandler,
  deleteV1JobsJobIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRouteHandler,
  getV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  getV1DataSetsDataSetIdRevisionsRouteHandler,
  getV1DataSetsDataSetIdRouteHandler,
  getV1DataSetsRouteHandler,
  getV1EventActionsEventActionIdRouteHandler,
  getV1EventActionsRouteHandler,
  getV1JobsJobIdRouteHandler,
  getV1JobsRouteHandler,
  patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  patchV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  patchV1DataSetsDataSetIdRouteHandler,
  patchV1EventActionsEventActionIdRouteHandler,
  patchV1JobsJobIdRouteHandler,
  postTagsResourceArnRouteHandler,
  postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRouteHandler,
  postV1DataSetsDataSetIdRevisionsRouteHandler,
  postV1DataSetsRouteHandler,
  postV1EventActionsRouteHandler,
  postV1JobsRouteHandler,
  postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1JobsJobIdRoute, deleteV1JobsJobIdRouteHandler)
  .openapi(getV1JobsJobIdRoute, getV1JobsJobIdRouteHandler)
  .openapi(patchV1JobsJobIdRoute, patchV1JobsJobIdRouteHandler)
  .openapi(postV1DataSetsRoute, postV1DataSetsRouteHandler)
  .openapi(getV1DataSetsRoute, getV1DataSetsRouteHandler)
  .openapi(postV1EventActionsRoute, postV1EventActionsRouteHandler)
  .openapi(getV1EventActionsRoute, getV1EventActionsRouteHandler)
  .openapi(postV1JobsRoute, postV1JobsRouteHandler)
  .openapi(getV1JobsRoute, getV1JobsRouteHandler)
  .openapi(postV1DataSetsDataSetIdRevisionsRoute, postV1DataSetsDataSetIdRevisionsRouteHandler)
  .openapi(getV1DataSetsDataSetIdRevisionsRoute, getV1DataSetsDataSetIdRevisionsRouteHandler)
  .openapi(
    deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
    deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  )
  .openapi(
    getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
    getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  )
  .openapi(
    patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
    patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRouteHandler,
  )
  .openapi(deleteV1DataSetsDataSetIdRoute, deleteV1DataSetsDataSetIdRouteHandler)
  .openapi(getV1DataSetsDataSetIdRoute, getV1DataSetsDataSetIdRouteHandler)
  .openapi(patchV1DataSetsDataSetIdRoute, patchV1DataSetsDataSetIdRouteHandler)
  .openapi(deleteV1EventActionsEventActionIdRoute, deleteV1EventActionsEventActionIdRouteHandler)
  .openapi(getV1EventActionsEventActionIdRoute, getV1EventActionsEventActionIdRouteHandler)
  .openapi(patchV1EventActionsEventActionIdRoute, patchV1EventActionsEventActionIdRouteHandler)
  .openapi(
    deleteV1DataSetsDataSetIdRevisionsRevisionIdRoute,
    deleteV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    getV1DataSetsDataSetIdRevisionsRevisionIdRoute,
    getV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    patchV1DataSetsDataSetIdRevisionsRevisionIdRoute,
    patchV1DataSetsDataSetIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRoute,
    getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRoute,
    postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRouteHandler,
  )
  .openapi(
    postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRoute,
    postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
