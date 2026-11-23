import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJsontoxmlKey() {
  return ['jsontoxml'] as const
}

export function getXmltojsonKey() {
  return ['xmltojson'] as const
}

export function getPostJsontoxmlKey() {
  return ['jsontoxml', '/jsontoxml', 'POST'] as const
}

export function usePostJsontoxml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jsontoxml.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jsontoxml.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJsontoxmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jsontoxml.$post> }) =>
        parseResponse(client.jsontoxml.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXmltojsonKey() {
  return ['xmltojson', '/xmltojson', 'POST'] as const
}

export function usePostXmltojson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xmltojson.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.xmltojson.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXmltojsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.xmltojson.$post> }) =>
        parseResponse(client.xmltojson.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
