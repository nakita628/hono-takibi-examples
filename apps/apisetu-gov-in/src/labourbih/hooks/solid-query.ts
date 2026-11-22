import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlimwKey() {
  return ['alimw'] as const
}

export function getAlsblKey() {
  return ['alsbl'] as const
}

export function getAlsfcKey() {
  return ['alsfc'] as const
}

export function getApptuKey() {
  return ['apptu'] as const
}

export function getClcerKey() {
  return ['clcer'] as const
}

export function getNooclKey() {
  return ['noocl'] as const
}

export function getSrcerKey() {
  return ['srcer'] as const
}

export function getPostAlimwCertificateMutationKey() {
  return ['alimw', '/alimw/certificate', 'POST'] as const
}

export function getPostAlimwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alimw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alimw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlimwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alimw.certificate.$post>) {
      return parseResponse(client.alimw.certificate.$post(args, options))
    },
  })
}

export function createPostAlimwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alimw.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.alimw.certificate.$post>,
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
    const mutationDefaults = getPostAlimwCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAlsblCertificateMutationKey() {
  return ['alsbl', '/alsbl/certificate', 'POST'] as const
}

export function getPostAlsblCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alsbl.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alsbl.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlsblCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alsbl.certificate.$post>) {
      return parseResponse(client.alsbl.certificate.$post(args, options))
    },
  })
}

export function createPostAlsblCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alsbl.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.alsbl.certificate.$post>,
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
    const mutationDefaults = getPostAlsblCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAlsfcCertificateMutationKey() {
  return ['alsfc', '/alsfc/certificate', 'POST'] as const
}

export function getPostAlsfcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alsfc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alsfc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlsfcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alsfc.certificate.$post>) {
      return parseResponse(client.alsfc.certificate.$post(args, options))
    },
  })
}

export function createPostAlsfcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alsfc.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.alsfc.certificate.$post>,
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
    const mutationDefaults = getPostAlsfcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApptuCertificateMutationKey() {
  return ['apptu', '/apptu/certificate', 'POST'] as const
}

export function getPostApptuCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apptu.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.apptu.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApptuCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apptu.certificate.$post>) {
      return parseResponse(client.apptu.certificate.$post(args, options))
    },
  })
}

export function createPostApptuCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apptu.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.apptu.certificate.$post>,
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
    const mutationDefaults = getPostApptuCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClcerCertificateMutationKey() {
  return ['clcer', '/clcer/certificate', 'POST'] as const
}

export function getPostClcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clcer.certificate.$post>) {
      return parseResponse(client.clcer.certificate.$post(args, options))
    },
  })
}

export function createPostClcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.clcer.certificate.$post>,
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
    const mutationDefaults = getPostClcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNooclCertificateMutationKey() {
  return ['noocl', '/noocl/certificate', 'POST'] as const
}

export function getPostNooclCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noocl.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.noocl.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNooclCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.noocl.certificate.$post>) {
      return parseResponse(client.noocl.certificate.$post(args, options))
    },
  })
}

export function createPostNooclCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.noocl.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.noocl.certificate.$post>,
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
    const mutationDefaults = getPostNooclCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSrcerCertificateMutationKey() {
  return ['srcer', '/srcer/certificate', 'POST'] as const
}

export function getPostSrcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.srcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.srcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSrcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.srcer.certificate.$post>) {
      return parseResponse(client.srcer.certificate.$post(args, options))
    },
  })
}

export function createPostSrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.srcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.srcer.certificate.$post>,
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
    const mutationDefaults = getPostSrcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
