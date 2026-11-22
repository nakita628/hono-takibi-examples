import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalInterconnectsInterconnectRoute,
  getProjectsProjectGlobalInterconnectsInterconnectGetDiagnosticsRoute,
  getProjectsProjectGlobalInterconnectsInterconnectGetMacsecConfigRoute,
  getProjectsProjectGlobalInterconnectsInterconnectRoute,
  getProjectsProjectGlobalInterconnectsRoute,
  patchProjectsProjectGlobalInterconnectsInterconnectRoute,
  postProjectsProjectGlobalInterconnectsResourceSetLabelsRoute,
  postProjectsProjectGlobalInterconnectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectsHandler = app
  .openapi(getProjectsProjectGlobalInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalInterconnectsInterconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInterconnectsInterconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalInterconnectsInterconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInterconnectsInterconnectGetDiagnosticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInterconnectsInterconnectGetMacsecConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalInterconnectsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
