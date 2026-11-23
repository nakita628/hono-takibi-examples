import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgcerKey() {
  return ['agcer'] as const
}

export function getBacerKey() {
  return ['bacer'] as const
}

export function getBhcerKey() {
  return ['bhcer'] as const
}

export function getChcerKey() {
  return ['chcer'] as const
}

export function getDccerKey() {
  return ['dccer'] as const
}

export function getFfcerKey() {
  return ['ffcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getMncerKey() {
  return ['mncer'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getPsprtKey() {
  return ['psprt'] as const
}

export function getRacerKey() {
  return ['racer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getPostAgcerCertificateMutationKey() {
  return ['agcer', '/agcer/certificate', 'POST'] as const
}

export function getPostAgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agcer.certificate.$post>) {
      return parseResponse(client.agcer.certificate.$post(args, options))
    },
  })
}

export function createPostAgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.agcer.certificate.$post>,
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
    const mutationDefaults = getPostAgcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBacerCertificateMutationKey() {
  return ['bacer', '/bacer/certificate', 'POST'] as const
}

export function getPostBacerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bacer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bacer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBacerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bacer.certificate.$post>) {
      return parseResponse(client.bacer.certificate.$post(args, options))
    },
  })
}

export function createPostBacerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bacer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bacer.certificate.$post>,
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
    const mutationDefaults = getPostBacerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBhcerCertificateMutationKey() {
  return ['bhcer', '/bhcer/certificate', 'POST'] as const
}

export function getPostBhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bhcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bhcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bhcer.certificate.$post>) {
      return parseResponse(client.bhcer.certificate.$post(args, options))
    },
  })
}

export function createPostBhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bhcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bhcer.certificate.$post>,
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
    const mutationDefaults = getPostBhcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChcerCertificateMutationKey() {
  return ['chcer', '/chcer/certificate', 'POST'] as const
}

export function getPostChcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chcer.certificate.$post>) {
      return parseResponse(client.chcer.certificate.$post(args, options))
    },
  })
}

export function createPostChcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chcer.certificate.$post>,
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
    const mutationDefaults = getPostChcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDccerCertificateMutationKey() {
  return ['dccer', '/dccer/certificate', 'POST'] as const
}

export function getPostDccerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dccer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dccer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDccerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dccer.certificate.$post>) {
      return parseResponse(client.dccer.certificate.$post(args, options))
    },
  })
}

export function createPostDccerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dccer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dccer.certificate.$post>,
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
    const mutationDefaults = getPostDccerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFfcerCertificateMutationKey() {
  return ['ffcer', '/ffcer/certificate', 'POST'] as const
}

export function getPostFfcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ffcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFfcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ffcer.certificate.$post>) {
      return parseResponse(client.ffcer.certificate.$post(args, options))
    },
  })
}

export function createPostFfcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ffcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ffcer.certificate.$post>,
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
    const mutationDefaults = getPostFfcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIncerCertificateMutationKey() {
  return ['incer', '/incer/certificate', 'POST'] as const
}

export function getPostIncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.incer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.incer.certificate.$post>) {
      return parseResponse(client.incer.certificate.$post(args, options))
    },
  })
}

export function createPostIncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.incer.certificate.$post>,
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
    const mutationDefaults = getPostIncerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLhcerCertificateMutationKey() {
  return ['lhcer', '/lhcer/certificate', 'POST'] as const
}

export function getPostLhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lhcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lhcer.certificate.$post>) {
      return parseResponse(client.lhcer.certificate.$post(args, options))
    },
  })
}

export function createPostLhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.lhcer.certificate.$post>,
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
    const mutationDefaults = getPostLhcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMncerCertificateMutationKey() {
  return ['mncer', '/mncer/certificate', 'POST'] as const
}

export function getPostMncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mncer.certificate.$post>) {
      return parseResponse(client.mncer.certificate.$post(args, options))
    },
  })
}

export function createPostMncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mncer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mncer.certificate.$post>,
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
    const mutationDefaults = getPostMncerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostObcerCertificateMutationKey() {
  return ['obcer', '/obcer/certificate', 'POST'] as const
}

export function getPostObcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.obcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.obcer.certificate.$post>) {
      return parseResponse(client.obcer.certificate.$post(args, options))
    },
  })
}

export function createPostObcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.obcer.certificate.$post>,
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
    const mutationDefaults = getPostObcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPsprtCertificateMutationKey() {
  return ['psprt', '/psprt/certificate', 'POST'] as const
}

export function getPostPsprtCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.psprt.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.psprt.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPsprtCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.psprt.certificate.$post>) {
      return parseResponse(client.psprt.certificate.$post(args, options))
    },
  })
}

export function createPostPsprtCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.psprt.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.psprt.certificate.$post>,
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
    const mutationDefaults = getPostPsprtCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRacerCertificateMutationKey() {
  return ['racer', '/racer/certificate', 'POST'] as const
}

export function getPostRacerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.racer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.racer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRacerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.racer.certificate.$post>) {
      return parseResponse(client.racer.certificate.$post(args, options))
    },
  })
}

export function createPostRacerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.racer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.racer.certificate.$post>,
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
    const mutationDefaults = getPostRacerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRmcerCertificateMutationKey() {
  return ['rmcer', '/rmcer/certificate', 'POST'] as const
}

export function getPostRmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rmcer.certificate.$post>) {
      return parseResponse(client.rmcer.certificate.$post(args, options))
    },
  })
}

export function createPostRmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rmcer.certificate.$post>,
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
    const mutationDefaults = getPostRmcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostShcerCertificateMutationKey() {
  return ['shcer', '/shcer/certificate', 'POST'] as const
}

export function getPostShcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shcer.certificate.$post>) {
      return parseResponse(client.shcer.certificate.$post(args, options))
    },
  })
}

export function createPostShcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shcer.certificate.$post>,
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
    const mutationDefaults = getPostShcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
