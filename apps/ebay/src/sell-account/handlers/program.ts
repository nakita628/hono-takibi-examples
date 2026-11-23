import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProgramGetOptedInProgramsRoute,
  postProgramOptInRoute,
  postProgramOptOutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const programHandler = app
  .openapi(getProgramGetOptedInProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProgramOptInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProgramOptOutRoute, (c) => {
    throw new Error('Not implemented')
  })
