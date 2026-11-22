import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBioentitysetSlimmerAnatomyRoute,
  getBioentitysetSlimmerFunctionRoute,
  getBioentitysetSlimmerPhenotypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bioentitysetSlimmerHandler = app
  .openapi(getBioentitysetSlimmerAnatomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetSlimmerFunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetSlimmerPhenotypeRoute, (c) => {
    throw new Error('Not implemented')
  })
