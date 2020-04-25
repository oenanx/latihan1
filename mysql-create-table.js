// Javascript source code

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log('Terkoneksi dengan sukses!');

    var sql = "CREATE TABLE product (id_product int(11) NOT NULL AUTO_INCREMENT,nama_product varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,gambar_product varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,harga_product int(13) NOT NULL,des_product text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,createdate date NOT NULL, PRIMARY KEY (id_product) USING BTREE, INDEX idx(id_product) USING BTREE ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;"; 
    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }

        console.log("Table berhasil dibuat!");
        connection.destroy();
    });
});