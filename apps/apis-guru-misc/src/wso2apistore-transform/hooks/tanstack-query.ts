import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJsontoxmlKey() {
  return ['jsontoxml'] as const
}

export function getXmltojsonKey() {
  return ['xmltojson'] as const
}

export function getPostJsontoxmlMutationKey() {
  return ['jsontoxml', '/jsontoxml', 'POST'] as const
}

export function getPostJsontoxmlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jsontoxml.$post>>>>>,
    TError,
    InferRequestType<typeof client.jsontoxml.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJsontoxmlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jsontoxml.$post>) {
      return parseResponse(client.jsontoxml.$post(args, options))
    },
  })
}

export function usePostJsontoxml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jsontoxml.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.jsontoxml.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJsontoxmlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXmltojsonMutationKey() {
  return ['xmltojson', '/xmltojson', 'POST'] as const
}

export function getPostXmltojsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xmltojson.$post>>>>>,
    TError,
    InferRequestType<typeof client.xmltojson.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostXmltojsonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.xmltojson.$post>) {
      return parseResponse(client.xmltojson.$post(args, options))
    },
  })
}

export function usePostXmltojson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xmltojson.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.xmltojson.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXmltojsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
