import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1PlayersPlayerIdSnapshotsRoute,
  getGamesV1SnapshotsSnapshotIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(getGamesV1PlayersPlayerIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1SnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
