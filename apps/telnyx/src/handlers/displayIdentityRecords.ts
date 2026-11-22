import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirDirIdRoute,
  getDirDirIdBpoAuthorizationsRoute,
  getDirDirIdRoute,
  getDirRoute,
  getEnterprisesEnterpriseIdDirRoute,
  patchDirDirIdRoute,
  postDirDirIdBpoLoaRoute,
  postDirDirIdLoaRoute,
  postDirDirIdSubmitRoute,
  postEnterprisesEnterpriseIdDirRoute,
} from '../routes'

const app = new OpenAPIHono()

export const displayIdentityRecordsHandler = app
  .openapi(getDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirDirIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirDirIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirDirIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirDirIdBpoAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdBpoLoaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdLoaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdDirRoute, (c) => {
    throw new Error('Not implemented')
  })
