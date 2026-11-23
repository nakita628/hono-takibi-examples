import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRoute,
  getPhenotypePhenominerChartSpeciesTypeKeyTermStringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phenotypeHandler = app
  .openapi(getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhenotypePhenominerChartSpeciesTypeKeyTermStringRoute, (c) => {
    throw new Error('Not implemented')
  })
