import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppendChatMessageRoute,
  getCheckTokenRoute,
  getCreateDiffHTMLRoute,
  getCreatePadRoute,
  getDeletePadRoute,
  getGetChatHeadRoute,
  getGetChatHistoryRoute,
  getGetHTMLRoute,
  getGetLastEditedRoute,
  getGetPublicStatusRoute,
  getGetReadOnlyIDRoute,
  getGetRevisionsCountRoute,
  getGetTextRoute,
  getListAllPadsRoute,
  getListAuthorsOfPadRoute,
  getPadUsersCountRoute,
  getPadUsersRoute,
  getSendClientsMessageRoute,
  getSetHTMLRoute,
  getSetPublicStatusRoute,
  getSetTextRoute,
  postAppendChatMessageRoute,
  postCheckTokenRoute,
  postCreateDiffHTMLRoute,
  postCreatePadRoute,
  postDeletePadRoute,
  postGetChatHeadRoute,
  postGetChatHistoryRoute,
  postGetHTMLRoute,
  postGetLastEditedRoute,
  postGetPublicStatusRoute,
  postGetReadOnlyIDRoute,
  postGetRevisionsCountRoute,
  postGetTextRoute,
  postListAllPadsRoute,
  postListAuthorsOfPadRoute,
  postPadUsersCountRoute,
  postPadUsersRoute,
  postSendClientsMessageRoute,
  postSetHTMLRoute,
  postSetPublicStatusRoute,
  postSetTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const padHandler = app
  .openapi(getAppendChatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppendChatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreateDiffHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateDiffHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreatePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreatePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeletePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeletePadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetChatHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetChatHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetChatHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetChatHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetLastEditedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetLastEditedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetReadOnlyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetReadOnlyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListAllPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAllPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListAuthorsOfPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAuthorsOfPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPadUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPadUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPadUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPadUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendClientsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendClientsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetTextRoute, (c) => {
    throw new Error('Not implemented')
  })
