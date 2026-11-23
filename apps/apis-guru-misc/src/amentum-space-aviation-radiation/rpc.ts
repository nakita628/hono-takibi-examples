import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCari7AmbientDose(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cari7.ambient_dose.$get(args, options))
}

export async function getCari7EffectiveDose(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cari7.effective_dose.$get(args, options))
}

export async function getParmaAmbientDose(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parma.ambient_dose.$get(args, options))
}

export async function getParmaDifferentialIntensity(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parma.differential_intensity.$get(args, options))
}

export async function getParmaEffectiveDose(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parma.effective_dose.$get(args, options))
}

export async function getRouteAmbientDose(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.ambient_dose.$get(args, options))
}

export async function getRouteEffectiveDose(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.effective_dose.$get(args, options))
}
