import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiPdfQueryKey() {
  return ['api', '/api/pdf'] as const
}

export function getApiPdfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPdfQueryKey>
  >({
    queryKey: getApiPdfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pdf.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPdf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiPdfQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPdfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPdfPdfconcatMutationKey() {
  return ['api', '/api/pdf/pdfconcat', 'POST'] as const
}

export function getPostApiPdfPdfconcatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfconcat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pdf.pdfconcat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfPdfconcatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.pdfconcat.$post>) {
      return parseResponse(client.api.pdf.pdfconcat.$post(args, options))
    },
  })
}

export function createPostApiPdfPdfconcat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfconcat.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pdf.pdfconcat.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfPdfconcatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPdfPdftoimageMutationKey() {
  return ['api', '/api/pdf/pdftoimage', 'POST'] as const
}

export function getPostApiPdfPdftoimageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdftoimage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pdf.pdftoimage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfPdftoimageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.pdftoimage.$post>) {
      return parseResponse(client.api.pdf.pdftoimage.$post(args, options))
    },
  })
}

export function createPostApiPdfPdftoimage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdftoimage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pdf.pdftoimage.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfPdftoimageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPdfPdfwritestringMutationKey() {
  return ['api', '/api/pdf/pdfwritestring', 'POST'] as const
}

export function getPostApiPdfPdfwritestringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfwritestring.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.pdf.pdfwritestring.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfPdfwritestringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.pdfwritestring.$post>) {
      return parseResponse(client.api.pdf.pdfwritestring.$post(args, options))
    },
  })
}

export function createPostApiPdfPdfwritestring<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.pdfwritestring.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pdf.pdfwritestring.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfPdfwritestringMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPdfWkhtmltopdfMutationKey() {
  return ['api', '/api/pdf/wkhtmltopdf', 'POST'] as const
}

export function getPostApiPdfWkhtmltopdfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.wkhtmltopdf.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfWkhtmltopdfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post>) {
      return parseResponse(client.api.pdf.wkhtmltopdf.$post(args, options))
    },
  })
}

export function createPostApiPdfWkhtmltopdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.wkhtmltopdf.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfWkhtmltopdfMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPdfXslfoMutationKey() {
  return ['api', '/api/pdf/xslfo', 'POST'] as const
}

export function getPostApiPdfXslfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.xslfo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pdf.xslfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfXslfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.xslfo.$post>) {
      return parseResponse(client.api.pdf.xslfo.$post(args, options))
    },
  })
}

export function createPostApiPdfXslfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.xslfo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pdf.xslfo.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfXslfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPdfXslfowithtransformMutationKey() {
  return ['api', '/api/pdf/xslfowithtransform', 'POST'] as const
}

export function getPostApiPdfXslfowithtransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pdf.xslfowithtransform.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.pdf.xslfowithtransform.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPdfXslfowithtransformMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pdf.xslfowithtransform.$post>) {
      return parseResponse(client.api.pdf.xslfowithtransform.$post(args, options))
    },
  })
}

export function createPostApiPdfXslfowithtransform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.pdf.xslfowithtransform.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.pdf.xslfowithtransform.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPdfXslfowithtransformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
