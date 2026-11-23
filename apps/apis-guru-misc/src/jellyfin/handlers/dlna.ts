import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDlnaProfilesProfileIdRoute,
  getDlnaIconsFileNameRoute,
  getDlnaProfileInfosRoute,
  getDlnaProfilesDefaultRoute,
  getDlnaProfilesProfileIdRoute,
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
  postDlnaProfilesProfileIdRoute,
  postDlnaProfilesRoute,
  postDlnaServerIdConnectionManagerControlRoute,
  postDlnaServerIdContentDirectoryControlRoute,
  postDlnaServerIdMediaReceiverRegistrarControlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlnaHandler = app
  .openapi(getDlnaProfileInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaProfilesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
