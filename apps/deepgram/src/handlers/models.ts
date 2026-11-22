import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AgentSettingsThinkModelsRoute,
  getV1ModelsModelIdRoute,
  getV1ModelsRoute,
  getV1ProjectsProjectIdModelsModelIdRoute,
  getV1ProjectsProjectIdModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getV1AgentSettingsThinkModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
