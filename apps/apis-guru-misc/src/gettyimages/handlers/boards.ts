import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BoardsBoardIdAssetsAssetIdRoute,
  deleteV3BoardsBoardIdAssetsRoute,
  deleteV3BoardsBoardIdCommentsCommentIdRoute,
  deleteV3BoardsBoardIdRoute,
  getV3BoardsBoardIdCommentsRoute,
  getV3BoardsBoardIdRoute,
  getV3BoardsRoute,
  postV3BoardsBoardIdCommentsRoute,
  postV3BoardsRoute,
  putV3BoardsBoardIdAssetsAssetIdRoute,
  putV3BoardsBoardIdAssetsRoute,
  putV3BoardsBoardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardsHandler = app
  .openapi(getV3BoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BoardsBoardIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BoardsBoardIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
