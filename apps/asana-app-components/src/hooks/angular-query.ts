import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionMetadataUrlPathPlaceholderKey() {
  return ['action.metadata_url_path_placeholder'] as const
}

export function getActionOnChangeCallbackPathPlaceholderKey() {
  return ['action.on_change_callback_path_placeholder'] as const
}

export function getActionOnSubmitCallbackPathPlaceholderKey() {
  return ['action.on_submit_callback_path_placeholder'] as const
}

export function getFormMetadataUrlPathPlaceholderKey() {
  return ['form_metadata_url_path_placeholder'] as const
}

export function getModalFormTypeaheadUrlPathPlaceholderKey() {
  return ['modal_form_typeahead_url_path_placeholder'] as const
}

export function getOnChangeCallbackPathPlaceholderKey() {
  return ['on_change_callback_path_placeholder'] as const
}

export function getOnSubmitCallbackPathPlaceholderKey() {
  return ['on_submit_callback_path_placeholder'] as const
}

export function getResourceAttachUrlPathPlaceholderKey() {
  return ['resource_attach_url_path_placeholder'] as const
}

export function getResourceTypeaheadUrlPathPlaceholderKey() {
  return ['resource_typeahead_url_path_placeholder'] as const
}

export function getRuleActionTypeaheadUrlPathPlaceholderKey() {
  return ['rule_action_typeahead_url_path_placeholder'] as const
}

export function getRunActionUrlPathPlaceholderKey() {
  return ['run_action_url_path_placeholder'] as const
}

export function getWidgetMetadataUrlPathPlaceholderKey() {
  return ['widget_metadata_url_path_placeholder'] as const
}

export function getWidgetMetadataUrlPathPlaceholderQueryKey(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
) {
  return [
    'widget_metadata_url_path_placeholder',
    '/widget_metadata_url_path_placeholder',
    args,
  ] as const
}

export function getWidgetMetadataUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWidgetMetadataUrlPathPlaceholderQueryKey>
  >({
    queryKey: getWidgetMetadataUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.widget_metadata_url_path_placeholder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWidgetMetadataUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWidgetMetadataUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWidgetMetadataUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostResourceAttachUrlPathPlaceholderMutationKey() {
  return [
    'resource_attach_url_path_placeholder',
    '/resource_attach_url_path_placeholder',
    'POST',
  ] as const
}

export function getPostResourceAttachUrlPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.resource_attach_url_path_placeholder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.resource_attach_url_path_placeholder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceAttachUrlPathPlaceholderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.resource_attach_url_path_placeholder.$post>,
    ) {
      return parseResponse(client.resource_attach_url_path_placeholder.$post(args, options))
    },
  })
}

export function injectPostResourceAttachUrlPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.resource_attach_url_path_placeholder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.resource_attach_url_path_placeholder.$post>,
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
    const mutationDefaults = getPostResourceAttachUrlPathPlaceholderMutationOptions<
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

export function getResourceTypeaheadUrlPathPlaceholderQueryKey(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
) {
  return [
    'resource_typeahead_url_path_placeholder',
    '/resource_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function getResourceTypeaheadUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceTypeaheadUrlPathPlaceholderQueryKey>
  >({
    queryKey: getResourceTypeaheadUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resource_typeahead_url_path_placeholder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourceTypeaheadUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceTypeaheadUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourceTypeaheadUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFormMetadataUrlPathPlaceholderQueryKey(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
) {
  return [
    'form_metadata_url_path_placeholder',
    '/form_metadata_url_path_placeholder',
    args,
  ] as const
}

export function getFormMetadataUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormMetadataUrlPathPlaceholderQueryKey>
  >({
    queryKey: getFormMetadataUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.form_metadata_url_path_placeholder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFormMetadataUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormMetadataUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormMetadataUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getModalFormTypeaheadUrlPathPlaceholderQueryKey(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
) {
  return [
    'modal_form_typeahead_url_path_placeholder',
    '/modal_form_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function getModalFormTypeaheadUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModalFormTypeaheadUrlPathPlaceholderQueryKey>
  >({
    queryKey: getModalFormTypeaheadUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.modal_form_typeahead_url_path_placeholder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModalFormTypeaheadUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModalFormTypeaheadUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getModalFormTypeaheadUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRuleActionTypeaheadUrlPathPlaceholderQueryKey(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
) {
  return [
    'rule_action_typeahead_url_path_placeholder',
    '/rule_action_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function getRuleActionTypeaheadUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRuleActionTypeaheadUrlPathPlaceholderQueryKey>
  >({
    queryKey: getRuleActionTypeaheadUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rule_action_typeahead_url_path_placeholder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRuleActionTypeaheadUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRuleActionTypeaheadUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRuleActionTypeaheadUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOnChangeCallbackPathPlaceholderMutationKey() {
  return [
    'on_change_callback_path_placeholder',
    '/on_change_callback_path_placeholder',
    'POST',
  ] as const
}

export function getPostOnChangeCallbackPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.on_change_callback_path_placeholder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.on_change_callback_path_placeholder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOnChangeCallbackPathPlaceholderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.on_change_callback_path_placeholder.$post>,
    ) {
      return parseResponse(client.on_change_callback_path_placeholder.$post(args, options))
    },
  })
}

export function injectPostOnChangeCallbackPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.on_change_callback_path_placeholder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.on_change_callback_path_placeholder.$post>,
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
    const mutationDefaults = getPostOnChangeCallbackPathPlaceholderMutationOptions<
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

export function getPostOnSubmitCallbackPathPlaceholderMutationKey() {
  return [
    'on_submit_callback_path_placeholder',
    '/on_submit_callback_path_placeholder',
    'POST',
  ] as const
}

export function getPostOnSubmitCallbackPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.on_submit_callback_path_placeholder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.on_submit_callback_path_placeholder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOnSubmitCallbackPathPlaceholderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.on_submit_callback_path_placeholder.$post>,
    ) {
      return parseResponse(client.on_submit_callback_path_placeholder.$post(args, options))
    },
  })
}

export function injectPostOnSubmitCallbackPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.on_submit_callback_path_placeholder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.on_submit_callback_path_placeholder.$post>,
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
    const mutationDefaults = getPostOnSubmitCallbackPathPlaceholderMutationOptions<
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

export function getPostRunActionUrlPathPlaceholderMutationKey() {
  return ['run_action_url_path_placeholder', '/run_action_url_path_placeholder', 'POST'] as const
}

export function getPostRunActionUrlPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.run_action_url_path_placeholder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.run_action_url_path_placeholder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRunActionUrlPathPlaceholderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.run_action_url_path_placeholder.$post>) {
      return parseResponse(client.run_action_url_path_placeholder.$post(args, options))
    },
  })
}

export function injectPostRunActionUrlPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.run_action_url_path_placeholder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.run_action_url_path_placeholder.$post>,
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
    const mutationDefaults = getPostRunActionUrlPathPlaceholderMutationOptions<
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

export function getActionMetadataUrlPathPlaceholderQueryKey(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
) {
  return [
    'action.metadata_url_path_placeholder',
    '/action.metadata_url_path_placeholder',
    args,
  ] as const
}

export function getActionMetadataUrlPathPlaceholderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionMetadataUrlPathPlaceholderQueryKey>
  >({
    queryKey: getActionMetadataUrlPathPlaceholderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['action.metadata_url_path_placeholder'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionMetadataUrlPathPlaceholder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionMetadataUrlPathPlaceholderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionMetadataUrlPathPlaceholderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionOnChangeCallbackPathPlaceholderMutationKey() {
  return [
    'action.on_change_callback_path_placeholder',
    '/action.on_change_callback_path_placeholder',
    'POST',
  ] as const
}

export function getPostActionOnChangeCallbackPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionOnChangeCallbackPathPlaceholderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['action.on_change_callback_path_placeholder']['$post']
      >,
    ) {
      return parseResponse(
        client['action.on_change_callback_path_placeholder'].$post(args, options),
      )
    },
  })
}

export function injectPostActionOnChangeCallbackPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>,
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
    const mutationDefaults = getPostActionOnChangeCallbackPathPlaceholderMutationOptions<
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

export function getPostActionOnSubmitCallbackPathPlaceholderMutationKey() {
  return [
    'action.on_submit_callback_path_placeholder',
    '/action.on_submit_callback_path_placeholder',
    'POST',
  ] as const
}

export function getPostActionOnSubmitCallbackPathPlaceholderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionOnSubmitCallbackPathPlaceholderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['action.on_submit_callback_path_placeholder']['$post']
      >,
    ) {
      return parseResponse(
        client['action.on_submit_callback_path_placeholder'].$post(args, options),
      )
    },
  })
}

export function injectPostActionOnSubmitCallbackPathPlaceholder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>,
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
    const mutationDefaults = getPostActionOnSubmitCallbackPathPlaceholderMutationOptions<
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
