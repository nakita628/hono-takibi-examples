import { OpenAPIHono } from '@hono/zod-openapi'
import {
  allFunctionsHandler,
  downloadHandler,
  historyHandler,
  organismListHandler,
  pathwayInformationHandler,
  pathwayListHandler,
  searchHandler,
  userManagementHandler,
  writeCreateUpdateDeleteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', allFunctionsHandler)
  .route('/', searchHandler)
  .route('/', pathwayInformationHandler)
  .route('/', downloadHandler)
  .route('/', historyHandler)
  .route('/', pathwayListHandler)
  .route('/', userManagementHandler)
  .route('/', organismListHandler)
  .route('/', writeCreateUpdateDeleteHandler)

export default app
