import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTextStructureFindFieldStructureRoute,
  getTextStructureFindMessageStructureRoute,
  getTextStructureTestGrokPatternRoute,
  postTextStructureFindMessageStructureRoute,
  postTextStructureFindStructureRoute,
  postTextStructureTestGrokPatternRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textStructureHandler = app
  .openapi(getTextStructureFindFieldStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTextStructureFindMessageStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTextStructureFindMessageStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTextStructureFindStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTextStructureTestGrokPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTextStructureTestGrokPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
