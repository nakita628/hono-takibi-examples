import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLedgersNameJournalKinesisStreamsStreamIdRoute,
  deleteLedgersNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getJournalS3ExportsRoute,
  getLedgersNameJournalKinesisStreamsRoute,
  getLedgersNameJournalKinesisStreamsStreamIdRoute,
  getLedgersNameJournalS3ExportsExportIdRoute,
  getLedgersNameJournalS3ExportsRoute,
  getLedgersNameRoute,
  getLedgersRoute,
  getTagsResourceArnRoute,
  patchLedgersNamePermissionsModeRoute,
  patchLedgersNameRoute,
  postLedgersNameBlockRoute,
  postLedgersNameDigestRoute,
  postLedgersNameJournalKinesisStreamsRoute,
  postLedgersNameJournalS3ExportsRoute,
  postLedgersNameRevisionRoute,
  postLedgersRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteLedgersNameJournalKinesisStreamsStreamIdRouteHandler,
  deleteLedgersNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getJournalS3ExportsRouteHandler,
  getLedgersNameJournalKinesisStreamsRouteHandler,
  getLedgersNameJournalKinesisStreamsStreamIdRouteHandler,
  getLedgersNameJournalS3ExportsExportIdRouteHandler,
  getLedgersNameJournalS3ExportsRouteHandler,
  getLedgersNameRouteHandler,
  getLedgersRouteHandler,
  getTagsResourceArnRouteHandler,
  patchLedgersNamePermissionsModeRouteHandler,
  patchLedgersNameRouteHandler,
  postLedgersNameBlockRouteHandler,
  postLedgersNameDigestRouteHandler,
  postLedgersNameJournalKinesisStreamsRouteHandler,
  postLedgersNameJournalS3ExportsRouteHandler,
  postLedgersNameRevisionRouteHandler,
  postLedgersRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteLedgersNameJournalKinesisStreamsStreamIdRoute,
    deleteLedgersNameJournalKinesisStreamsStreamIdRouteHandler,
  )
  .openapi(
    getLedgersNameJournalKinesisStreamsStreamIdRoute,
    getLedgersNameJournalKinesisStreamsStreamIdRouteHandler,
  )
  .openapi(postLedgersRoute, postLedgersRouteHandler)
  .openapi(getLedgersRoute, getLedgersRouteHandler)
  .openapi(deleteLedgersNameRoute, deleteLedgersNameRouteHandler)
  .openapi(getLedgersNameRoute, getLedgersNameRouteHandler)
  .openapi(patchLedgersNameRoute, patchLedgersNameRouteHandler)
  .openapi(
    getLedgersNameJournalS3ExportsExportIdRoute,
    getLedgersNameJournalS3ExportsExportIdRouteHandler,
  )
  .openapi(postLedgersNameJournalS3ExportsRoute, postLedgersNameJournalS3ExportsRouteHandler)
  .openapi(getLedgersNameJournalS3ExportsRoute, getLedgersNameJournalS3ExportsRouteHandler)
  .openapi(postLedgersNameBlockRoute, postLedgersNameBlockRouteHandler)
  .openapi(postLedgersNameDigestRoute, postLedgersNameDigestRouteHandler)
  .openapi(postLedgersNameRevisionRoute, postLedgersNameRevisionRouteHandler)
  .openapi(
    getLedgersNameJournalKinesisStreamsRoute,
    getLedgersNameJournalKinesisStreamsRouteHandler,
  )
  .openapi(
    postLedgersNameJournalKinesisStreamsRoute,
    postLedgersNameJournalKinesisStreamsRouteHandler,
  )
  .openapi(getJournalS3ExportsRoute, getJournalS3ExportsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(patchLedgersNamePermissionsModeRoute, patchLedgersNamePermissionsModeRouteHandler)

export default app
