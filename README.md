# React com redux

| Type       | Desc                                              |
| ---------- | ------------------------------------------------- |
| `STORE`    | estado global da aplicação                        |
| `ACTION`   | ações repassadas para o redux. manipular o estado |
| `REDUCER`  | retorna o estado inicial, Manipular o estado      |
| `DISPATCH` | disparar actios para o redux                      |

| Func                 | Def                                        |
| -------------------- | ------------------------------------------ |
| `createStore`        | cria o estado global da aplicação          |
| `function reducer()` | como o estado vai iniciar                  |
| `Provider`           | repassa dados a todos os components filhos |
| `Provider`           | repassa dados a todos os components filhos |
| `connect`            | pega os valores do estado/store            |

## connect

```js
/**
 * O Component vai receber também o DISPATCH
 */

/* params
 * 1ª: função que recebe o estado, e deve retorna quais props vai usar desse estado
 */

/*vai pegar o estado e vai retornar um objeto com a prop modules contendo o state*/
connect((state) => ({ modules: state }))(Component);
```

## Action

```js
/**
 * formato de Objeto
 * tem que ter um type único: indicando a acão
 * e pode enviar outros dados com ele
 */
```

## Dispatch

```js
/**
 * dispara actions para O REDUX, actions que vão ser ouvidas por todos reducers
 */
```

## Reducers

```js
/**
 * Toda vez que uma ACTION é disparada recebe: STATE: estado anterior. e a ACTION
 */
```
