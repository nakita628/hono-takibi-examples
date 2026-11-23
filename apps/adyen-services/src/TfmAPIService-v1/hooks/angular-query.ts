import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssignTerminalsKey() {
  return ['assignTerminals'] as const
}

export function getFindTerminalKey() {
  return ['findTerminal'] as const
}

export function getGetStoresUnderAccountKey() {
  return ['getStoresUnderAccount'] as const
}

export function getGetTerminalDetailsKey() {
  return ['getTerminalDetails'] as const
}

export function getGetTerminalsUnderAccountKey() {
  return ['getTerminalsUnderAccount'] as const
}

export function getPostAssignTerminalsMutationKey() {
  return ['assignTerminals', '/assignTerminals', 'POST'] as const
}

export function getPostAssignTerminalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assignTerminals.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assignTerminals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssignTerminalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assignTerminals.$post>) {
      return parseResponse(client.assignTerminals.$post(args, options))
    },
  })
}

export function injectPostAssignTerminals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assignTerminals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.assignTerminals.$post>,
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
    const mutationDefaults = getPostAssignTerminalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFindTerminalMutationKey() {
  return ['findTerminal', '/findTerminal', 'POST'] as const
}

export function getPostFindTerminalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findTerminal.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findTerminal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindTerminalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findTerminal.$post>) {
      return parseResponse(client.findTerminal.$post(args, options))
    },
  })
}

export function injectPostFindTerminal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findTerminal.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findTerminal.$post>,
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
    const mutationDefaults = getPostFindTerminalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetStoresUnderAccountMutationKey() {
  return ['getStoresUnderAccount', '/getStoresUnderAccount', 'POST'] as const
}

export function getPostGetStoresUnderAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getStoresUnderAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getStoresUnderAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetStoresUnderAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getStoresUnderAccount.$post>) {
      return parseResponse(client.getStoresUnderAccount.$post(args, options))
    },
  })
}

export function injectPostGetStoresUnderAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getStoresUnderAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getStoresUnderAccount.$post>,
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
    const mutationDefaults = getPostGetStoresUnderAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetTerminalDetailsMutationKey() {
  return ['getTerminalDetails', '/getTerminalDetails', 'POST'] as const
}

export function getPostGetTerminalDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalDetails.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getTerminalDetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTerminalDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getTerminalDetails.$post>) {
      return parseResponse(client.getTerminalDetails.$post(args, options))
    },
  })
}

export function injectPostGetTerminalDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalDetails.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getTerminalDetails.$post>,
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
    const mutationDefaults = getPostGetTerminalDetailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetTerminalsUnderAccountMutationKey() {
  return ['getTerminalsUnderAccount', '/getTerminalsUnderAccount', 'POST'] as const
}

export function getPostGetTerminalsUnderAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalsUnderAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getTerminalsUnderAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTerminalsUnderAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getTerminalsUnderAccount.$post>) {
      return parseResponse(client.getTerminalsUnderAccount.$post(args, options))
    },
  })
}

export function injectPostGetTerminalsUnderAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalsUnderAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getTerminalsUnderAccount.$post>,
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
    const mutationDefaults = getPostGetTerminalsUnderAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
