import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiPdfKey() {
  return ['api', '/api/pdf'] as const
}

export function useGetApiPdf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPdfKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pdf.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPdf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPdfKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pdf.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPdfPdfconcatKey() {
  return ['api', '/api/pdf/pdfconcat', 'POST'] as const
}

export function usePostApiPdfPdfconcat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfconcat.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.pdfconcat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfPdfconcatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pdf.pdfconcat.$post> }) =>
        parseResponse(client.api.pdf.pdfconcat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPdfPdftoimageKey() {
  return ['api', '/api/pdf/pdftoimage', 'POST'] as const
}

export function usePostApiPdfPdftoimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdftoimage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.pdftoimage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfPdftoimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pdf.pdftoimage.$post> }) =>
        parseResponse(client.api.pdf.pdftoimage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPdfPdfwritestringKey() {
  return ['api', '/api/pdf/pdfwritestring', 'POST'] as const
}

export function usePostApiPdfPdfwritestring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfwritestring.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.pdfwritestring.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfPdfwritestringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.pdf.pdfwritestring.$post> },
      ) => parseResponse(client.api.pdf.pdfwritestring.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPdfWkhtmltopdfKey() {
  return ['api', '/api/pdf/wkhtmltopdf', 'POST'] as const
}

export function usePostApiPdfWkhtmltopdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.wkhtmltopdf.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfWkhtmltopdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post> }) =>
        parseResponse(client.api.pdf.wkhtmltopdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPdfXslfoKey() {
  return ['api', '/api/pdf/xslfo', 'POST'] as const
}

export function usePostApiPdfXslfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.xslfo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.xslfo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfXslfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pdf.xslfo.$post> }) =>
        parseResponse(client.api.pdf.xslfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPdfXslfowithtransformKey() {
  return ['api', '/api/pdf/xslfowithtransform', 'POST'] as const
}

export function usePostApiPdfXslfowithtransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.xslfowithtransform.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pdf.xslfowithtransform.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPdfXslfowithtransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.pdf.xslfowithtransform.$post> },
      ) => parseResponse(client.api.pdf.xslfowithtransform.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
