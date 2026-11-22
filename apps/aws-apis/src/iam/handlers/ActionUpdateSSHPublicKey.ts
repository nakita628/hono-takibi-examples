import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateSSHPublicKeyRoute, postActionUpdateSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateSSHPublicKeyHandler = app
  .openapi(getActionUpdateSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
