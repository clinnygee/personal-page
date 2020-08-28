<?php foreach($projects as $project) : ?>
                        
                            
                        <div class="project">
                        <img src=<?=$project['image'] ?> class='project-image'>
                            <div class="hidden">
                                <div class="description"></div>
                                <div class="link">
                                    <a href=<?= $project['url']?>>
                                        <button>
                                            View
                                        </button>
                                    </a>
                                   <a href=<?=$project['github'] ?>>
                                    <button>
                                        Check the source!
                                    </button>
                                    </a>

                                </div>

                            </div>
                        </img>
                        </div>
                    
                
            <?php endforeach ?>