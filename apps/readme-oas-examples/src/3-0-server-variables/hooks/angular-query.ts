import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getComboKey() {
  return ['combo'] as const
}

export function getGlobalKey() {
  return ['global'] as const
}

export function getOperationKey() {
  return ['operation'] as const
}

export function getPathKey() {
  return ['path'] as const
}

export function getPostGlobalMutationKey() {
  return ['global', '/global', 'POST'] as const
}

export function getPostGlobalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.global.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGlobalMutationKey(),
    async mutationFn() {
      return parseResponse(client.global.$post(undefined, options))
    },
  })
}

export function injectPostGlobal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.global.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGlobalMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOperationMutationKey() {
  return ['operation', '/operation', 'POST'] as const
}

export function getPostOperationMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operation.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOperationMutationKey(),
    async mutationFn() {
      return parseResponse(client.operation.$post(undefined, options))
    },
  })
}

export function injectPostOperation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operation.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOperationMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutPathMutationKey() {
  return ['path', '/path', 'PUT'] as const
}

export function getPutPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutPathMutationKey(),
    async mutationFn() {
      return parseResponse(client.path.$put(undefined, options))
    },
  })
}

export function injectPutPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$put>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutComboMutationKey() {
  return ['combo', '/combo', 'PUT'] as const
}

export function getPutComboMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combo.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutComboMutationKey(),
    async mutationFn() {
      return parseResponse(client.combo.$put(undefined, options))
    },
  })
}

export function injectPutCombo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.combo.$put>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutComboMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
