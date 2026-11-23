import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLedgersNameJournalKinesisStreamsStreamIdRoute,
  deleteLedgersNameRoute,
  getLedgersNameJournalKinesisStreamsRoute,
  getLedgersNameJournalKinesisStreamsStreamIdRoute,
  getLedgersNameJournalS3ExportsExportIdRoute,
  getLedgersNameJournalS3ExportsRoute,
  getLedgersNameRoute,
  getLedgersRoute,
  patchLedgersNamePermissionsModeRoute,
  patchLedgersNameRoute,
  postLedgersNameBlockRoute,
  postLedgersNameDigestRoute,
  postLedgersNameJournalKinesisStreamsRoute,
  postLedgersNameJournalS3ExportsRoute,
  postLedgersNameRevisionRoute,
  postLedgersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgersHandler = app
  .openapi(deleteLedgersNameJournalKinesisStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersNameJournalKinesisStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLedgersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLedgersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersNameJournalS3ExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersNameJournalS3ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersNameJournalS3ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersNameBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersNameDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersNameRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgersNameJournalKinesisStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgersNameJournalKinesisStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLedgersNamePermissionsModeRoute, (c) => {
    throw new Error('Not implemented')
  })
