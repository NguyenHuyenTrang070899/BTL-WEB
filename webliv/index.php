<?php 
    require_once  __DIR__. "/autoload/autoload.php"; 
    $sqlHomecate = "SELECT name,id FROM category WHERE home ";  
    $CategoryHome = $db->fetchsql($sqlHomecate);
    $data = [];
        foreach ($CategoryHome as $item)
         {
        $cateId = intval($item['id']);
        $sql = " SELECT * FROM product WHERE category_id = $cateId";
        $ProductHome = $db->fetchsql($sql);
        $data[$item['name']] = $ProductHome;
        }
 ?>
    <?php require_once  __DIR__. "/layouts/header.php"; ?>
 
        <div class="col-md-9 bor">
            <section id="slide" class="text-center" >
                <div id="myCarousel" class="carousel slide col-md-12" data-ride="carousel">
                            <!-- Nút bấm tròn đặt ở đây -->

                                <ol class="carousel-indicators text-center">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol>


                                <div class="carousel-inner" role="listbox">
                                    <div class="item active img">
                                        <img src="<?php echo base_url() ?>public/frontend/images/3.png" class="img-thumbnail im">
                                                        <!-- thêm caption cho ảnh ở đây -->
                                    </div>
                                    <div class="item img">
                                        <img src="<?php echo base_url() ?>public/frontend/images/7.jpg" class="img-thumbnail im">
                                                        <!-- thêm caption cho ảnh ở đây -->
                                    </div>
                                    <div class="item img">
                                        <img src="<?php echo base_url() ?>public/frontend/images/38.jpg" class="img-thumbnail im">
                                                        <!-- thêm caption cho ảnh ở đây -->
                                    </div>
                                    <div class="item img">
                                        <img src="<?php echo base_url() ?>public/frontend/images/9.jpg" class="img-thumbnail im">
                                                        <!-- thêm caption cho ảnh ở đây -->
                                    </div>
                                </div>
                                        <!-- Nút next và prev đặt ở đây -->
                                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                            </div>
            </section>    
            <section class="box-main1">
                <?php foreach ($data as $key => $value): ?>
                    <h3 class="title-main"><a href=""> <?php echo $key ?></a> </h3>
           
                    <div class="showitem clearfix" style="margin-bottom: 10px; margin-top: 10px;" >
                     <?php foreach ($value as $item): ?>
                            <div class="col-md-3 item-product bor">
                            <a href="chi-tiet-san-pham.php?id= <?php echo $item['id'] ?>">
                                    <img src="public/uploads/product/<?php echo $item['thunbar']?>" class="" width="100%" height="230">
                            </a>
                                <div class="info-item">
                                        <a href="chi-tiet-san-pham.php?id= <?php echo $item['id'] ?>"> <?php echo $item['name']; ?></a>
                        <?php if ($item['sale'] > 0): ?>
                            <p> <strike class="sale"><?php echo formatPrice($item['price']) ?> </strike> <b class="price"><?php echo formatpricesale($item['price'],$item['sale']) ?></b>
                        <?php else: ?>
                            <b class="price"><?php echo formatPrice($item['price']) ?></b>
                        <?php endif ?> 
                                </div>
                                <div class="hidenitem">
                                        <p><a href="chi-tiet-san-pham.php?id= <?php echo $item['id'] ?>"><i class="fa fa-search"></i></a></p>
                                        <p><a href=""><i class="fa fa-heart"></i></a></p>
                                        <p><a href="addcart.php?id=<?php echo $item['id'] ?>"><i class="fa fa-shopping-basket"></i></a></p>
                                </div>
                            </div>
                    <?php endforeach ?>                   
                </div>              
                <?php endforeach ?>   
            </section>
        </div>
    <?php require_once  __DIR__. "/layouts/footer.php"; ?>
    