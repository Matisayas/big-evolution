import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type GqlCreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
};

export type GqlMutation = {
  __typename?: 'Mutation';
  createUser: GqlUser;
  deleteUser: GqlUser;
  updateUser: GqlUser;
};


export type GqlMutationCreateUserArgs = {
  input: GqlCreateUserInput;
};


export type GqlMutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type GqlMutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  input: GqlUpdateUserInput;
};

export type GqlQuery = {
  __typename?: 'Query';
  user: GqlUser;
  users?: Maybe<Array<GqlUser>>;
};


export type GqlQueryUserArgs = {
  id: Scalars['Int']['input'];
};

export const GqlRoleEnum = {
  Admin: 'ADMIN',
  PersonalTrainer: 'PERSONAL_TRAINER',
  Student: 'STUDENT'
} as const;

export type GqlRoleEnum = typeof GqlRoleEnum[keyof typeof GqlRoleEnum];
export type GqlSimpleUser = {
  __typename?: 'SimpleUser';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  surname: Scalars['String']['output'];
};

export type GqlUpdateUserInput = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
};

export type GqlUser = {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: GqlRoleEnum;
  surname: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserInput: GqlCreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RoleEnum: GqlRoleEnum;
  SimpleUser: ResolverTypeWrapper<GqlSimpleUser>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateUserInput: GqlUpdateUserInput;
  User: ResolverTypeWrapper<GqlUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateUserInput: GqlCreateUserInput;
  Date: Scalars['Date']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  SimpleUser: GqlSimpleUser;
  String: Scalars['String']['output'];
  UpdateUserInput: GqlUpdateUserInput;
  User: GqlUser;
};

export interface GqlDateScalarConfig extends GraphQLScalarTypeConfig<GqlResolversTypes['Date'], any> {
  name: 'Date';
}

export type GqlMutationResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation']> = {
  createUser?: Resolver<GqlResolversTypes['User'], ParentType, ContextType, RequireFields<GqlMutationCreateUserArgs, 'input'>>;
  deleteUser?: Resolver<GqlResolversTypes['User'], ParentType, ContextType, RequireFields<GqlMutationDeleteUserArgs, 'id'>>;
  updateUser?: Resolver<GqlResolversTypes['User'], ParentType, ContextType, RequireFields<GqlMutationUpdateUserArgs, 'id' | 'input'>>;
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  user?: Resolver<GqlResolversTypes['User'], ParentType, ContextType, RequireFields<GqlQueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<GqlResolversTypes['User']>>, ParentType, ContextType>;
};

export type GqlSimpleUserResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['SimpleUser'] = GqlResolversParentTypes['SimpleUser']> = {
  id?: Resolver<GqlResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlUserResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['User'] = GqlResolversParentTypes['User']> = {
  createdAt?: Resolver<GqlResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<GqlResolversTypes['RoleEnum'], ParentType, ContextType>;
  surname?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlResolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Mutation?: GqlMutationResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  SimpleUser?: GqlSimpleUserResolvers<ContextType>;
  User?: GqlUserResolvers<ContextType>;
};

