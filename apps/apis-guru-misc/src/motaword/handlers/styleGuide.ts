import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdStyleguidesStyleGuideIdRoute,
  getProjectsProjectIdStyleguidesRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdRoute,
  getStyleguideRoute,
  postProjectsProjectIdStyleguidesRoute,
  postStyleguideRoute,
  putProjectsProjectIdStyleguidesStyleGuideIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const styleGuideHandler = app
  .openapi(getProjectsProjectIdStyleguidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStyleguidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleguideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleguideRoute, (c) => {
    throw new Error('Not implemented')
  })
