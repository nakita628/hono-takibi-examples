import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAivmModelsAivmModelUuidUninstallRoute,
  getAivmModelsAivmModelUuidRoute,
  getAivmModelsRoute,
  postAivmModelsAivmModelUuidLoadRoute,
  postAivmModelsAivmModelUuidUnloadRoute,
  postAivmModelsAivmModelUuidUpdateRoute,
  postAivmModelsInstallRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aivmModelsHandler = app
  .openapi(getAivmModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAivmModelsInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAivmModelsAivmModelUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAivmModelsAivmModelUuidLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAivmModelsAivmModelUuidUnloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAivmModelsAivmModelUuidUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAivmModelsAivmModelUuidUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
