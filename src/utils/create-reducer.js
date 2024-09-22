/**
 * стандартизация создания редусеров
 * @param {any} initialState стейт для каждого редусера
 * @param {{type:any, payload:any}} action объект с любыми экшенами и данными для изменения
 * @returns коллбек по типу экшена или стейт
 */
export function createReducer(initialState, action) {
  return (state = initialState, { type, payload }) => {
    const handler = action[type];
    return handler ? handler(state, payload ?? "") : state;
  };
}
