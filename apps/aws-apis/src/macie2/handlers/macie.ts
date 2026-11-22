import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMacieRoute,
  getMacieRoute,
  patchMacieMembersIdRoute,
  patchMacieRoute,
  postMacieRoute,
} from '../routes'

const app = new OpenAPIHono()

export const macieHandler = app
  .openapi(deleteMacieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMacieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMacieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMacieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMacieMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
