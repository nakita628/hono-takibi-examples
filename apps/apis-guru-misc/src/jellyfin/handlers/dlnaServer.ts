import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDlnaIconsFileNameRoute,
  getDlnaServerIdConnectionManagerConnectionManagerRoute,
  getDlnaServerIdConnectionManagerConnectionManagerXmlRoute,
  getDlnaServerIdConnectionManagerRoute,
  getDlnaServerIdContentDirectoryContentDirectoryRoute,
  getDlnaServerIdContentDirectoryContentDirectoryXmlRoute,
  getDlnaServerIdContentDirectoryRoute,
  getDlnaServerIdDescriptionRoute,
  getDlnaServerIdDescriptionXmlRoute,
  getDlnaServerIdIconsFileNameRoute,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRoute,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRoute,
  getDlnaServerIdMediaReceiverRegistrarRoute,
  postDlnaServerIdConnectionManagerControlRoute,
  postDlnaServerIdContentDirectoryControlRoute,
  postDlnaServerIdMediaReceiverRegistrarControlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlnaServerHandler = app
  .openapi(getDlnaIconsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdConnectionManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdConnectionManagerConnectionManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdConnectionManagerConnectionManagerXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaServerIdConnectionManagerControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdContentDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdContentDirectoryContentDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdContentDirectoryContentDirectoryXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaServerIdContentDirectoryControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdMediaReceiverRegistrarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaServerIdMediaReceiverRegistrarControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdDescriptionXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaServerIdIconsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
