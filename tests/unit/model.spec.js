import Model from '@/models/model'

it('should construct a model', () => {
  const m = new Model({foo: 'bar'})

  expect(m.json.foo).toBe('bar')
})
