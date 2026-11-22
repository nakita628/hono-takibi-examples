import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute,
  deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  deleteApiVersionImagesSharegroupsSharegroupIdRoute,
  deleteApiVersionImagesSharegroupsTokensTokenUuidRoute,
  getApiVersionImagesImageIdSharegroupsRoute,
  getApiVersionImagesSharegroupsRoute,
  getApiVersionImagesSharegroupsSharegroupIdImagesRoute,
  getApiVersionImagesSharegroupsSharegroupIdMembersRoute,
  getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  getApiVersionImagesSharegroupsSharegroupIdRoute,
  getApiVersionImagesSharegroupsTokensRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRoute,
  postApiVersionImagesSharegroupsRoute,
  postApiVersionImagesSharegroupsSharegroupIdImagesRoute,
  postApiVersionImagesSharegroupsSharegroupIdMembersRoute,
  postApiVersionImagesSharegroupsTokensRoute,
  putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute,
  putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  putApiVersionImagesSharegroupsSharegroupIdRoute,
  putApiVersionImagesSharegroupsTokensTokenUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageSharingHandler = app
  .openapi(postApiVersionImagesSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsSharegroupIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsSharegroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesImageIdSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
