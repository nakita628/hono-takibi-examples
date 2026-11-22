import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingAllOfObjectRoute,
  postAnythingAnyOfObjectRoute,
  postAnythingAnyOfPrimitiveRoute,
  postAnythingNestedOneOfObjectRefRoute,
  postAnythingNestedOneOfObjectWithNestedOneOfRoute,
  postAnythingNestedOneOfRefRoute,
  postAnythingOneOfObjectRefRoute,
  postAnythingOneOfObjectRoute,
  postAnythingOneOfPrimitiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingAllOfObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingAnyOfObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingAnyOfPrimitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingOneOfObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingOneOfPrimitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingOneOfObjectRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingNestedOneOfObjectRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingNestedOneOfRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingNestedOneOfObjectWithNestedOneOfRoute, (c) => {
    throw new Error('Not implemented')
  })
