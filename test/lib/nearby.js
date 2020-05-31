const expect = require('chai').expect

const Nearby = require('../../server/lib/nearby')
const { data } = require('../support')

describe('Nearby', () => {
  describe('.get', () => {
    // Arrange
    const nearby = new Nearby(data)

    it('expects an array of objects to be returned, where the location is within x miles of the given latitute and longitude ', () => {
      // Act
      const result = nearby.get(51.509865, -0.118092)

      // Assert
      expect(result.length).is.eql(1)
      expect(result[0].first_name).is.eql('Rick')
    })
  })
})