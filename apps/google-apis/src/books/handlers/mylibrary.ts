import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBooksV1MylibraryAnnotationsAnnotationIdRoute,
  getBooksV1MylibraryAnnotationsRoute,
  getBooksV1MylibraryBookshelvesRoute,
  getBooksV1MylibraryBookshelvesShelfRoute,
  getBooksV1MylibraryBookshelvesShelfVolumesRoute,
  getBooksV1MylibraryReadingpositionsVolumeIdRoute,
  postBooksV1MylibraryAnnotationsRoute,
  postBooksV1MylibraryAnnotationsSummaryRoute,
  postBooksV1MylibraryBookshelvesShelfAddVolumeRoute,
  postBooksV1MylibraryBookshelvesShelfClearVolumesRoute,
  postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute,
  postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute,
  postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute,
  putBooksV1MylibraryAnnotationsAnnotationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mylibraryHandler = app
  .openapi(getBooksV1MylibraryAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryAnnotationsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBooksV1MylibraryAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBooksV1MylibraryAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesShelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfAddVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfClearVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesShelfVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryReadingpositionsVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
