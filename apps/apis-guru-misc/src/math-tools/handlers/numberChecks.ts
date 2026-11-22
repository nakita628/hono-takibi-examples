import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersIsCubeRoute,
  getNumbersIsPalindromeRoute,
  getNumbersIsSquareRoute,
  getNumbersIsTriangleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberChecksHandler = app
  .openapi(getNumbersIsCubeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsPalindromeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsSquareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersIsTriangleRoute, (c) => {
    throw new Error('Not implemented')
  })
