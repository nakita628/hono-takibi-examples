import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnnotationsAccIdRgdId2Route,
  getAnnotationsAccIdRgdIdRoute,
  getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRoute,
  getAnnotationsCountAccIdIncludeChildrenRoute,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRoute,
  getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRoute,
  getAnnotationsReferenceRefRgdIdRoute,
  getAnnotationsRgdIdRgdIdOntologyPrefixRoute,
  getAnnotationsRgdIdRgdIdRoute,
  postAnnotationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationHandler = app
  .openapi(postAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsAccIdRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsCountAccIdIncludeChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsReferenceRefRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsRgdIdRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsRgdIdRgdIdOntologyPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsAccIdRgdId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
