package db

import (
	"github.com/anggakharisma/spice-republic/api/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("sr.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect to database")
	}

	err = database.AutoMigrate(&models.Food{}, &models.Order{}, &models.OrderItem{}, &models.OrderItemExtra{}, &models.Extra{}, &models.MeasurementType{})

	if err != nil {
		return
	}

	DB = database
}
