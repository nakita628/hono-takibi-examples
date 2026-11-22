import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRoute,
  getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Route,
  getKeysRoute,
  patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRoute,
  postKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keyManagementHandler = app
  .openapi(getKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
