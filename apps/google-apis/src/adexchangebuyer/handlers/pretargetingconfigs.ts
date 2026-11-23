import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePretargetingconfigsAccountIdConfigIdRoute,
  getPretargetingconfigsAccountIdConfigIdRoute,
  getPretargetingconfigsAccountIdRoute,
  patchPretargetingconfigsAccountIdConfigIdRoute,
  postPretargetingconfigsAccountIdRoute,
  putPretargetingconfigsAccountIdConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pretargetingconfigsHandler = app
  .openapi(getPretargetingconfigsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPretargetingconfigsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePretargetingconfigsAccountIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPretargetingconfigsAccountIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPretargetingconfigsAccountIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPretargetingconfigsAccountIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
