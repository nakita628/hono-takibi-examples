import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingArraysTopLevelPayloadsRoute,
  patchAnythingBooleansRoute,
  patchAnythingCircularRoute,
  patchAnythingNumbersRoute,
  patchAnythingQuirksPolymorphismRoute,
  patchAnythingRawBodyTopLevelPayloadsRoute,
  patchAnythingStringsTopLevelPayloadsRoute,
  postAnythingArraysRoute,
  postAnythingArraysTopLevelPayloadsRoute,
  postAnythingBooleansRoute,
  postAnythingCircularRoute,
  postAnythingNumbersRoute,
  postAnythingObjectsRoute,
  postAnythingQuirksPolymorphismRoute,
  postAnythingQuirksRoute,
  postAnythingRawBodyTopLevelPayloadsRoute,
  postAnythingStringsRoute,
  postAnythingStringsTopLevelPayloadsRoute,
  putAnythingNumbersRoute,
  putAnythingQuirksPolymorphismRoute,
  putAnythingStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingStringsTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingStringsTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingBooleansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingBooleansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingArraysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingArraysTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingArraysTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingCircularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingCircularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingRawBodyTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingRawBodyTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingQuirksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
